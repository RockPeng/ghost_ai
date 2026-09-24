"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-30 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside className="fixed left-0 top-0 bottom-0 z-40 w-72 flex flex-col border-r border-border-default bg-bg-surface">
        {/* Header */}
        <div className="flex items-center justify-between h-14 px-4 border-b border-border-default">
          <h2 className="text-sm font-semibold text-text-primary">projects</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close sidebar">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col min-h-0">
          <TabsList className="w-full justify-start rounded-none border-b border-border-default bg-transparent p-0 h-auto">
            <TabsTrigger
              value="my-projects"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary data-[state=active]:bg-transparent text-text-secondary data-[state=active]:text-text-primary text-sm px-4 py-3"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary data-[state=active]:bg-transparent text-text-secondary data-[state=active]:text-text-primary text-sm px-4 py-3"
            >
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex-1 p-4 text-text-muted text-sm">
            {/* Empty placeholder */}
          </TabsContent>

          <TabsContent value="shared" className="flex-1 p-4 text-text-muted text-sm">
            {/* Empty placeholder */}
          </TabsContent>
        </Tabs>

        {/* New Project button */}
        <div className="p-4 border-t border-border-default">
          <Button variant="outline" className="w-full">
            <span>New Project</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
