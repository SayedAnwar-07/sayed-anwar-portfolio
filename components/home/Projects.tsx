"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { myProjects, Project } from "@/data/data";
import { ShimmerButton } from "../ui/shimmer-button";
import { Header } from "../common/Header";
import { FaGithub } from "react-icons/fa";
import { PiShareFill } from "react-icons/pi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Projects: FC = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="px-4 mb-12">
            <Header
              title="My Projects"
              subtitle="Portfolio Highlights"
              description="A showcase of my selected projects demonstrating skills in web development, e-commerce, and full-stack applications."
              align="left"
            />
          </div>


          <div className="space-y-12">
            {myProjects.map((project: Project) => (
              <Card key={project.id} className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 min-h-[70vh]">
                {/* Left Div - Info */}
                <CardContent className="lg:w-2/5 space-y-4">
                  <CardHeader className="space-y-2 p-0">
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>                   
                  </CardHeader>

                  <p className="text-sm">{project.description}</p>

                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.subDescription.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <div
                        key={tag.id}
                        className="flex items-center gap-1 border dark:bg-white p-2 rounded-full"
                        style={{ color: tag.color.light }}
                      >
                        <tag.Icon className="w-4 h-4" /> {tag.name}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 mt-6">
                    {project.githubLink && (
                      <div className="p-0 ">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ShimmerButton>
                          <span className="text-sm flex gap-2">View on GitHub <FaGithub className="text-lg font-bold"/></span>
                          </ShimmerButton>
                        </a>
                      </div>
                    )}

                    {project.liveURL && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <ShimmerButton>
                            <span className="text-sm flex gap-2">
                              Live URL <PiShareFill className="text-lg font-bold" />
                            </span>
                          </ShimmerButton>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Notice</AlertDialogTitle>
                            <AlertDialogDescription>
                              For backend deployment, I am using Render.com free tier. Therefore, when you open my projects, the backend data may take up to 2 minutes to load. Please be patient.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>
                               <a
                                  href={project.liveURL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >Go to URL</a>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </CardContent>

                {/* Right Div - Image */}
                <div className="lg:w-3/5 flex justify-center items-start shadow-2xl">
                  <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                     className="w-full h-full sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] rounded-md object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;
