import { projectData } from "@/data/ProjectData"
import { Box } from "@mui/material"
import { ProjectContainer } from "./ProjectContainer"

const ProjectList = () => {
  return (
    <div className="mx-3 bg-white-400 flex justify-center">
      <Box 
        sx={{
          display: 'grid', 
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 2
        }}
      >
        {projectData.map((project) => (
          <ProjectContainer
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </Box>
    </div>
  )
}

export default ProjectList