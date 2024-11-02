import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedCandidates");
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>

      {savedCandidates.length === 0 ? (
        <p>No candidates have been accepted yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <img
                src={candidate.avatar_url}
                alt={candidate.login}
                width={50}
              />
              <p>
                <strong>Name:</strong> {candidate.name || "N/A"}
              </p>
              <p>
                <strong>Username:</strong> {candidate.login}
              </p>
              <p>
                <strong>Location:</strong> {candidate.location || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {candidate.email || "N/A"}
              </p>
              <p>
                <strong>Company:</strong> {candidate.company || "N/A"}
              </p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
