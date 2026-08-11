function RepoCard({ repo }) {

  return (

    <div className="card">

      <h2>{repo.name}</h2>

      <p>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {repo.html_url}
        </a>

      </p>

      <p>
        ⭐ Stars : {repo.stargazers_count}
      </p>

    </div>

  );
}

export default RepoCard;