"use client"

import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { ProjectContainer } from "../../components/ProjectContainer";
import { projectData } from "../../data/ProjectData";
import { certificationData } from "../../data/CertificationData"; // create this file

export default function Projects() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <section id="projects" className="md:mt-15 mx-3 bg-white-400 flex flex-col justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-wide">
          PROJECTS AND CERTIFICATIONS
        </h2>
        <div className="w-20 h-1 bg-[#d2824a] mx-auto mt-2 rounded"></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#d2824a", // active tab underline
            },
          }}
        >
          <Tab
            label="Works"
            sx={{
              "&.Mui-selected": {
                color: "#d2824a", // active tab text
              },
            }}
          />
          <Tab
            label="Certifications"
            sx={{
              "&.Mui-selected": {
                color: "#d2824a", // active tab text
              },
            }}
          />
        </Tabs>
      </div>

      {/* Tab Content */}
      <div className="mx-3 bg-white-400 flex justify-center">
        {/* Projects / Works Tab */}
        {tabValue === 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
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
        )}

        {/* Certifications Tab */}
        {tabValue === 1 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {certificationData
            .filter(cert => cert.id && cert.title) 
            .map((cert) => (
              <ProjectContainer
                key={cert.id}
                image={cert.image}
                title={cert.title}
                description={cert.description}
                techStack={cert.techStack}
              />
            ))}
          </Box>
        )}
      </div>
    </section>
  );
}
