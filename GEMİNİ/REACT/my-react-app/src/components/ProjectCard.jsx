// src/components/ProjectCard.jsx

function ProjectCard({ title, tech }) { // props objesini doğrudan parçaladık
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      <h2>{title}</h2>
      <p>Kullanılan Teknolojiler: {tech}</p>
    </div>
  );
}


export default ProjectCard;