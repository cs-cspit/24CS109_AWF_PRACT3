import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoCard from "../components/RepoCard";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepositories = () => {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/kashyapnasit109/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch repositories.");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <>
        <ErrorMessage message={error} />

        <button className="retry-btn" onClick={fetchRepositories}>
          Retry
        </button>
      </>
    );
  }

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>  My GitHub Repositories</h1>

      <input
        type="text"
        placeholder="Search Repository..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredRepos.length === 0 ? (
        <h3>No Repository Found</h3>
      ) : (
        filteredRepos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h2>{repo.name}</h2>

            <p>
              ⭐ Stars :
              <strong> {repo.stargazers_count}</strong>
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Repository
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;