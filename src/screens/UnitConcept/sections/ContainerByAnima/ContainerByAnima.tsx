import {
  BuildingIcon,
  HelpCircleIcon,
  MapPinIcon,
  NewspaperIcon,
  SignpostIcon,
  SmilePlusIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const ContainerByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { 
      icon: <div className="w-5 h-5 flex items-center justify-center">
        <img 
          src="/home.svg"
          width={20}
          height={20}
          alt="Home"
          className="opacity-87"
        />
      </div>,
      label: "Home",
      active: true 
    },
    {
      icon: <div className="w-5 h-5 flex items-center justify-center">
        <img 
          src="/explore.svg"
          width={20}
          height={20}
          alt="Explore"
          className="opacity-60"
        />
      </div>,
      label: "Explore",
      active: false
    },
    {
      icon: <div className="w-5 h-5 flex items-center justify-center">
        <img 
          src="/web-stories.svg"
          width={20}
          height={20}
          alt="Stories"
          className="opacity-60"
        />
      </div>,
      label: "Saved",
      active: false
    },
  ];

  // Featured reports data
  const featuredReports = [
    {
      image: "/image.png",
      title: "Emergency Medicine Insights Report",
      description:
        "This report delves into the latest trends in emergency medicine, examining patient flow, treatment efficacy, and resource utilization in urgent care settings. It aims to provide emergency department leaders with valuable insights to enhance patient outcomes and streamline operations.",
      isNew: true,
    },
    {
      image: "/image-1.png",
      title: "Emergency Care Performance Metrics",
      description:
        "This overview presents critical performance metrics in emergency care, including response times, patient satisfaction ratings, and treatment success rates. It serves as a vital resource for healthcare administrators to pinpoint improvement areas and elevate the quality of emergency services.",
      isNew: false,
    },
    {
      image: "/image-2.png",
      title: "Trends in Emergency Medicine",
      description:
        "This analysis investigates the latest trends in emergency medicine, focusing on advancements in triage protocols, the rise of telehealth in urgent care, and the integration of AI technologies in patient assessment. It aims to equip healthcare professionals with knowledge about emerging opportunities and challenges in emergency care.",
      isNew: false,
    },
  ];

  // Collections data
  const collections = [
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
    {
      title: "ED Performance Dashboards",
      description: "Key dashboards for ED performance tracking.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      lastUpdated: "04/02/2025",
    },
  ];

  // New releases data
  const newReleases = [
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "/image-29.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "/image-29.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "/image-29.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
  ];

  // Recently visited reports data
  const recentReports = [
    { title: "EM KPIs by Month", time: "Just now", isAlternate: false },
    {
      title: "Acute Care Metrics Summary by Month",
      time: "10m ago",
      isAlternate: true,
    },
    {
      title: "Clinical Pathway Dashboard",
      time: "Today at 10:56",
      isAlternate: false,
    },
    {
      title: "System Quad Aim Performance Management",
      time: "Yesterday at 09:10",
      isAlternate: true,
    },
    {
      title: "Patient Satisfaction Trends Over Time",
      time: "2 days ago",
      isAlternate: false,
    },
    {
      title: "Operational Efficiency Review",
      time: "3 days ago",
      isAlternate: true,
    },
    {
      title: "Readmission Rates Analysis",
      time: "1 week ago",
      isAlternate: false,
    },
    {
      title: "Cost-Effectiveness of Treatment Programs",
      time: "1 week ago",
      isAlternate: true,
    },
    {
      title: "Emergency Department Utilization Statistics",
      time: "2 weeks ago",
      isAlternate: false,
    },
    {
      title: "Outcomes of Surgical Interventions",
      time: "2 weeks ago",
      isAlternate: true,
    },
    {
      title: "Telehealth Adoption Rates",
      time: "3 weeks ago",
      isAlternate: false,
    },
    {
      title: "Chronic Disease Management Outcomes",
      time: "1 month ago",
      isAlternate: true,
    },
    {
      title: "Quality Improvement Initiatives",
      time: "1 month ago",
      isAlternate: false,
    },
    {
      title: "Healthcare Disparities Assessment",
      time: "1 month ago",
      isAlternate: true,
    },
    {
      title: "Patient Flow Optimization Strategies",
      time: "1 month ago",
      isAlternate: false,
    },
    {
      title: "Healthcare Provider Workload Analysis",
      time: "2 months ago",
      isAlternate: true,
    },
    {
      title: "Medication Safety and Error Reporting",
      time: "2 months ago",
      isAlternate: false,
    },
    {
      title: "Infection Control Metrics Overview",
      time: "2 months ago",
      isAlternate: true,
    },
    {
      title: "Health IT System Performance Review",
      time: "3 months ago",
      isAlternate: false,
    },
    {
      title: "Patient Engagement and Education Programs",
      time: "3 months ago",
      isAlternate: true,
    },
    {
      title: "Pediatric Care Quality Metrics",
      time: "4 months ago",
      isAlternate: false,
    },
    {
      title: "Mental Health Service Utilization",
      time: "4 months ago",
      isAlternate: true,
    },
    {
      title: "Workforce Diversity and Inclusion Metrics",
      time: "5 months ago",
      isAlternate: false,
    },
    {
      title: "Sustainability Initiatives in Healthcare",
      time: "5 months ago",
      isAlternate: true,
    },
    {
      title: "Advanced Imaging Utilization Trends",
      time: "6 months ago",
      isAlternate: false,
    },
    {
      title: "Population Health Management Strategies",
      time: "6 months ago",
      isAlternate: true,
    },
    {
      title: "Pharmaceutical Use and Guidelines Compliance",
      time: "7 months ago",
      isAlternate: false,
    },
  ];

  // Shortcuts data
  const shortcuts = [
    { icon: <HelpCircleIcon className="w-4 h-4" />, label: "About ACOE" },
    {
      icon: <NewspaperIcon className="w-4 h-4" />,
      label: "What's new on CARE?",
    },
    { icon: <SignpostIcon className="w-4 h-4" />, label: "Onboarding guide" },
    { icon: <SmilePlusIcon className="w-4 h-4" />, label: "Feedback" },
  ];

  // Pinned reports data
  const pinnedReports = [
    { title: "Report name" },
    { title: "Report name" },
    { title: "Report name" },
    { title: "Report name" },
  ];

  return (
    <div className="flex items-start gap-4 relative flex-1 self-stretch w-full grow">
      {/* Sidebar Navigation */}
      <nav className="flex flex-col w-12 items-start gap-2 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col h-12 items-center justify-center gap-1 px-3 py-1 relative self-stretch w-full rounded-md ${item.active ? "bg-[#e5eaf2]" : ""}`}
          >
            {item.icon}
            <div
              className={`relative w-fit text-[11px] font-semibold text-[rgba(0,0,0,0.87)] text-center`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <Card className="flex items-start gap-20 p-6 relative flex-1 self-stretch grow rounded-xl shadow-[0px_2px_1px_-1px_#00000033,0px_1px_1px_#00000024,0px_1px_3px_#0000001f]">
        <CardContent className="flex flex-col h-[790px] items-start gap-6 relative flex-1 grow p-0 mb-[-18.00px] overflow-hidden">
          <ScrollArea className="w-full h-full">
            <div className="flex flex-col gap-6">
              {/* For You Section */}
              <section className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-[0_0_auto] items-center gap-2 relative">
                    <h2 className="relative w-fit mt-[-1.00px] font-typography-subtitle1 text-[#000000de] whitespace-nowrap">
                      For you
                    </h2>
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <img
                        className="relative w-5 h-5"
                        alt="Icon"
                        src="/icon.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  {featuredReports.map((report, index) => (
                    <Card
                      key={index}
                      className="flex flex-col items-center gap-2 p-2 relative flex-1 grow rounded-xl overflow-hidden border border-solid border-[#dae2ec]"
                    >
                      <div className="flex h-[132px] items-start relative self-stretch w-full bg-[#ffffff01] rounded-lg overflow-hidden border border-solid border-[#dae2ec]">
                        <img
                          className="relative flex-1 self-stretch grow"
                          alt={report.title}
                          src={report.image}
                        />
                        {report.isNew && (
                          <div className="inline-flex items-center gap-2 absolute top-2 left-2">
                            <Badge className="bg-[#2563eb26] text-[#1565c0] backdrop-blur-[2px]">
                              New
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="flex flex-col items-start gap-2 pt-0 pb-2 px-2 relative self-stretch w-full">
                        <div className="flex flex-col items-start relative self-stretch w-full">
                          <h3 className="relative self-stretch mt-[-1.00px] font-typography-subtitle1 text-[#05060f]">
                            {report.title}
                          </h3>
                        </div>
                        <div className="flex flex-col items-start relative self-stretch w-full">
                          <p className="relative self-stretch h-10 mt-[-1.00px] font-typography-body2 text-[#00000099] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                            {report.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <img
                    className="absolute w-6 h-6 top-[108px] left-[980px]"
                    alt="Arrow back"
                    src="/arrow-back-ios-new.svg"
                  />
                </div>
              </section>

              {/* Saved Section */}
              <section className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[610.5px] items-center gap-4 relative">
                    <div className="inline-flex flex-[0_0_auto] items-center gap-2 relative">
                      <h2 className="relative w-fit mt-[-1.00px] font-typography-subtitle1 text-[#000000de] whitespace-nowrap">
                        Saved
                      </h2>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-typography-body2 text-[#1976d2] whitespace-nowrap">
                        See more
                      </div>
                    </div>
                  </div>

                  <ToggleGroup
                    type="single"
                    defaultValue="collections"
                    className="bg-[#efefef] rounded"
                  >
                    <ToggleGroupItem
                      value="collections"
                      className="h-6 px-4 py-0 bg-white rounded"
                    >
                      <span className="font-typography-subtitle2 text-black text-center whitespace-nowrap">
                        My collections
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="followed"
                      className="h-6 px-4 py-0 rounded"
                    >
                      <span className="font-typography-body2 text-[#00000099] text-center whitespace-nowrap">
                        Followed
                      </span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  <div className="flex items-center gap-2 relative self-stretch w-full">
                    {collections.slice(0, 3).map((collection, index) => (
                      <Card
                        key={index}
                        className="flex items-center gap-2 p-2 relative flex-1 grow rounded overflow-hidden border border-solid border-[#dae2ec]"
                      >
                        <div className="flex flex-wrap w-[65px] h-14 items-start gap-[4px_4px] relative">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="flex w-[26px] h-[26px] items-start relative bg-[#ffffff01] rounded overflow-hidden border border-solid border-[#dae2ec]"
                            >
                              <img
                                className="relative flex-1 self-stretch grow object-cover"
                                alt="Image"
                                src="/image-26.png"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
                          <div className="flex flex-col items-start relative self-stretch w-full">
                            <h3 className="relative self-stretch mt-[-1.00px] font-typography-body2 text-[#000000de]">
                              {collection.title}
                            </h3>
                            <p className="relative self-stretch font-typography-caption text-[#000000de]">
                              {collection.description}
                            </p>
                          </div>
                          <div className="inline-flex items-start gap-4 relative">
                            <div className="inline-flex items-center gap-1 relative">
                              <img
                                className="relative w-3 h-3"
                                alt="File copy"
                                src="/file-copy.svg"
                              />
                              <div className="inline-flex flex-col items-start relative">
                                <div className="relative w-fit mt-[-1.00px] font-avatar-initialssm text-[#00000099] whitespace-nowrap">
                                  {collection.reportCount} reports
                                </div>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-1 relative">
                              <img
                                className="relative w-3 h-3"
                                alt="Update"
                                src="/update.svg"
                              />
                              <div className="inline-flex flex-col items-start relative">
                                <div className="relative w-fit mt-[-1.00px] font-avatar-initialssm text-[#00000099] whitespace-nowrap">
                                  Updated {collection.lastUpdated}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 relative self-stretch w-full">
                    {collections.slice(3, 6).map((collection, index) => (
                      <Card
                        key={index}
                        className="flex items-center gap-2 p-2 relative flex-1 grow rounded overflow-hidden border border-solid border-[#dae2ec]"
                      >
                        <div className="flex flex-wrap w-[65px] h-14 items-start gap-[4px_4px] relative">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="flex w-[26px] h-[26px] items-start relative bg-[#ffffff01] rounded overflow-hidden border border-solid border-[#dae2ec]"
                            >
                              <img
                                className="relative flex-1 self-stretch grow object-cover"
                                alt="Image"
                                src="/image-26.png"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-start gap-1 relative flex-1 self-stretch grow">
                          <div className="flex flex-col items-start relative self-stretch w-full">
                            <h3 className="relative self-stretch mt-[-1.00px] font-typography-body2 text-[#000000de]">
                              {collection.title}
                            </h3>
                            <p className="relative self-stretch font-typography-caption text-[#000000de]">
                              {collection.description}
                            </p>
                          </div>
                          <div className="inline-flex items-start gap-4 relative">
                            <div className="inline-flex items-center gap-1 relative">
                              <img
                                className="relative w-3 h-3"
                                alt="File copy"
                                src="/file-copy.svg"
                              />
                              <div className="inline-flex flex-col items-start relative">
                                <div className="relative w-fit mt-[-1.00px] font-avatar-initialssm text-[#00000099] whitespace-nowrap">
                                  {collection.reportCount} reports
                                </div>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-1 relative">
                              <img
                                className="relative w-3 h-3"
                                alt="Update"
                                src="/update.svg"
                              />
                              <div className="inline-flex flex-col items-start relative">
                                <div className="relative w-fit mt-[-1.00px] font-avatar-initialssm text-[#00000099] whitespace-nowrap">
                                  Updated {collection.lastUpdated}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Newly Released Section */}
              <section className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-[0_0_auto] items-center gap-2 relative">
                  <h2 className="relative w-fit mt-[-1.00px] font-typography-subtitle1 text-[#000000de] whitespace-nowrap">
                    Newly released
                  </h2>
                </div>

                <div className="flex items-start gap-3 relative self-stretch w-full">
                  {newReleases.map((release, index) => (
                    <Card
                      key={index}
                      className="flex flex-col items-start gap-3 p-4 relative flex-1 grow rounded-lg overflow-hidden border border-solid border-zinc-200 shadow-[0px_1px_2px_#0000000d]"
                    >
                      <div className="flex flex-col items-start relative self-stretch w-full">
                        <div className="flex flex-col items-start relative self-stretch w-full">
                          <h3 className="relative self-stretch mt-[-1.00px] font-typography-subtitle2 text-gray-900">
                            {release.title}
                          </h3>
                        </div>
                        <div className="relative w-fit font-typography-caption text-gray-500 whitespace-nowrap">
                          Released on {release.releaseDate}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 relative self-stretch w-full">
                        <div className="relative w-24 h-[60px] rounded-md overflow-hidden border border-solid border-[#f1f1f1] shadow-shadow-200">
                          <img
                            className="absolute w-[104px] h-[60px] top-0 left-0 object-cover"
                            alt="Image"
                            src={release.image}
                          />
                        </div>
                        <p className="relative flex-1 mt-[-1.00px] font-typography-caption text-gray-500">
                          {release.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between relative self-stretch w-full">
                        <div className="inline-flex items-center justify-center relative rounded-md">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-neutral-700 text-sm text-center whitespace-nowrap">
                            {release.type}
                          </div>
                        </div>
                        <div className="inline-flex items-center justify-center gap-1 relative rounded-md">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#2561e5] text-sm text-center whitespace-nowrap">
                            {release.category}
                          </div>
                          <img
                            className="relative w-4 h-4"
                            alt="Arrow"
                            src="/arrow.svg"
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Recently Visited Reports Section */}
              <section className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <header className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full bg-transparent">
                  <div className="inline-flex flex-[0_0_auto] items-center gap-2 relative">
                    <h2 className="relative w-fit mt-[-1.00px] font-typography-subtitle1 text-[#000000de] whitespace-nowrap">
                      Recently visited reports
                    </h2>
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <img
                        className="relative w-5 h-5"
                        alt="Icon"
                        src="/icon.svg"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-[148px] px-[9px] py-0.5 relative self-stretch w-full bg-neutral-50 rounded">
                    <div className="flex w-[527px] items-center gap-2 relative">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#00000099] text-xs leading-3">
                        Report name
                      </div>
                    </div>
                    <div className="inline-flex flex-[0_0_auto] items-center gap-2 relative">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#00000099] text-xs leading-3">
                        Last opened time
                      </div>
                    </div>
                  </div>
                </header>

                <div className="flex flex-col h-[737px] items-start relative self-stretch w-full overflow-hidden">
                  <ScrollArea className="w-full h-full">
                    {recentReports.map((report, index) => (
                      <div
                        key={index}
                        className={`flex flex-col w-full items-start p-2 relative ${report.isAlternate ? "bg-neutral-100" : ""} rounded-lg`}
                      >
                        <div className="flex w-full items-center gap-4 relative">
                          <img
                            className="relative w-8 h-8 object-cover"
                            alt="Image"
                            src="/image-56.png"
                          />
                          <div className="flex items-center gap-[100px] relative flex-1 grow">
                            <div className="relative w-[527px] mt-[-1.00px] font-typography-subtitle2 text-[#000000de]">
                              {report.title}
                            </div>
                            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                  <div className="relative w-fit mt-[-1.00px] font-typography-body2 text-[#00000099] whitespace-nowrap">
                                    {report.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </section>
            </div>
          </ScrollArea>
        </CardContent>

        {/* Right Sidebar */}
        <aside className="flex flex-col w-[210px] items-start gap-4 relative">
          {/* User Profile */}
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <div className="flex flex-col items-start relative self-stretch w-full">
              <h2 className="relative self-stretch mt-[-1.00px] font-typography-subtitle1 text-[#000000de]">
                Kim, Hanae
              </h2>
              <div className="self-stretch font-badge-label text-[#00000099]">
                Senior Program Manager
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full">
              <div className="flex items-center gap-2 relative self-stretch w-full">
                <UsersIcon className="w-4 h-4" />
                <div className="relative w-fit mt-[-1.00px] font-typography-caption text-[#00000099] whitespace-nowrap">
                  4007 Ss CC Cll Analytics
                </div>
              </div>
              <div className="flex items-center gap-2 relative self-stretch w-full">
                <MapPinIcon className="w-4 h-4" />
                <div className="flex-1 mt-[-1.00px] font-typography-caption text-[#00000099]">
                  Queen of the Valley Medical Center(HR)
                </div>
              </div>
              <div className="flex items-center gap-2 relative self-stretch w-full">
                <BuildingIcon className="w-4 h-4" />
                <div className="relative w-fit mt-[-1.00px] font-typography-caption text-[#00000099] whitespace-nowrap">
                  Providence St. Joseph Health
                </div>
              </div>
            </div>
          </div>

          <Separator className="w-full" />

          {/* Shortcuts */}
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-typography-subtitle2 text-[#000000de]">
              Shortcuts
            </h3>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 relative self-stretch w-full rounded"
                >
                  <div className="flex w-6 h-6 items-center justify-center gap-4 p-2.5 relative bg-[#e5eaf2] rounded">
                    {shortcut.icon}
                  </div>
                  <div className="relative w-fit font-typography-body2 text-[#00000099] text-center whitespace-nowrap">
                    {shortcut.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="w-full" />

          {/* Pinned Reports */}
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-typography-subtitle2 text-[#000000de]">
              Pinned reports
            </h3>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              {pinnedReports.map((report, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 relative"
                >
                  <div className="relative w-8 h-8 bg-[#efefef] rounded-md" />
                  <div className="relative w-fit font-typography-body2 text-[#00000099] text-center whitespace-nowrap">
                    {report.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </Card>
    </div>
  );
};