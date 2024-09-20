import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Book, Briefcase, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const IconWrapper = ({ Icon, children }) => (
  <div className="flex items-center mb-2">
    <Icon className="mr-2 text-blue-600" size={18} />
    <span className="text-gray-700">{children}</span>
  </div>
);

const Section = ({ title, children }) => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-blue-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const ExperienceItem = ({ title, company, date, responsibilities, projects }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-600 italic mb-2">{company} | {date}</p>
      <div className={`${expanded ? '' : 'h-32 overflow-hidden'}`}>
        <h4 className="font-semibold mt-2 mb-1">Responsibilities:</h4>
        <ul className="list-disc list-inside mb-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-1 text-gray-700">{item}</li>
          ))}
        </ul>
        {projects && (
          <>
            <h4 className="font-semibold mt-2 mb-1">Projects:</h4>
            <ul className="list-disc list-inside">
              {projects.map((project, index) => (
                <li key={index} className="mb-1 text-gray-700">{project}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Button 
        variant="link"
        onClick={() => setExpanded(!expanded)}
        className="mt-2 p-0 h-auto flex items-center"
      >
        {expanded ? (
          <>
            Show less <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            Show more <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
};

const SkillBar = ({ skill, level }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{skill}</span>
      <span className="text-gray-600">{level}%</span>
    </div>
    <Progress value={level} className="w-full" />
  </div>
);

const ProfessionalResume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
          <h1 className="text-4xl font-bold mb-2">Magdy Omar</h1>
          <p className="text-xl">Software Testing Engineer</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <IconWrapper Icon={Phone}>01003736871</IconWrapper>
            <IconWrapper Icon={Mail}>magdyomar650@gmail.com</IconWrapper>
            <IconWrapper Icon={Linkedin}>magdy-omar-08baa5197</IconWrapper>
            <IconWrapper Icon={MapPin}>Maadi, Cairo, Egypt</IconWrapper>
          </div>

          <Section title="Summary">
            <p className="text-gray-700 leading-relaxed">
              Software Testing Engineer with two years of experience in UAT and regression testing. 
              Skilled in JIRA, Postman, and Agile methodologies. Strong problem-solving abilities, 
              attention to detail, and a commitment to high-quality software. Effective in team 
              collaboration and enhancing software performance.
            </p>
          </Section>

          <Section title="Experience">
            <ExperienceItem
              title="Software Quality Control Engineer"
              company="SilverKey Technologies"
              date="May 2024 - Now"
              responsibilities={[
                "Reviewing and understanding Business Requirements Documents and Functional Specifications Documents, Perform Test Analysis.",
                "Performing UAT testing.",
                "Creating Test Plan and RTM.",
                "Execute test cases & create bug reports Using GitHub.",
                "Performing Smoke, Sanity, Confirmation, Regression testing.",
                "Using postman for API testing.",
                "Mobile testing for a Hybrid Application.",
                "Mobile testing for Native Applications (iOS and Android)."
              ]}
              projects={[
                "مجلس النواب (MPA)",
                "بنك القاهره",
                "وزاره العدل (TMDـ Judge)",
                "وزاره االتصاالت (MCIT - LMIS)"
              ]}
            />
            <ExperienceItem
              title="Software Quality Control Engineer"
              company="Ebank"
              date="Jan 2024 – Jul 2024"
              responsibilities={[
                "Reviewing, understanding, and analyzing business requirements.",
                "Performing UAT testing",
                "Perform test plan & test suites.",
                "Run test cases & create bug reports using Jira.",
                "Performing Smoke, Sanity, Confirmation, Regression and Exploratory testing",
                "Develop, Maintain and Test RPA Bots"
              ]}
            />
            <ExperienceItem
              title="Software Quality Control Engineer"
              company="UTrust"
              date="Dec 2022 – Dec 2023"
              responsibilities={[
                "Writing, reviewing, and executing test cases",
                "Performing functional testing",
                "Testing across various platforms (Web and Mobile)",
                "Experienced in Smoke Testing and Regression Testing"
              ]}
              projects={[
                "National Water Company (NWC) ERP system"
              ]}
            />
            <ExperienceItem
              title="Freelancer Tester"
              company="Upwork and UTest"
              date="Apr 2022 – Dec 2023"
              responsibilities={[
                "Manual testing for software websites"
              ]}
              projects={[
                "Dubarter",
                "Tabibi"
              ]}
            />
            <ExperienceItem
              title="Intern Software Tester Engineer"
              company="FGS"
              date="Jun 2022 – Mar 2022"
              responsibilities={[
                "Focused on bug detection and follow-up until closure",
                "Coordinated with the development team on bug resolution"
              ]}
            />
          </Section>

          <Section title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillBar skill="Agile Methodologies" level={90} />
              <SkillBar skill="Manual Testing" level={95} />
              <SkillBar skill="API Testing (Postman)" level={85} />
              <SkillBar skill="Performance Testing (JMeter)" level={80} />
              <SkillBar skill="Mobile Application Testing" level={85} />
              <SkillBar skill="Test Case Writing" level={90} />
            </div>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Experienced in Agile methodologies, including Scrum and Kanban</li>
              <li>Excellent knowledge of Software testing techniques in the ISTQB syllabus</li>
              <li>Read, understand, and review Business Requirements Documents</li>
              <li>Experienced in Manual Testing in various domains</li>
              <li>Excellent Test Case writing and Bug Reporting skills</li>
              <li>Excellent knowledge about Software Testing Tools (Testlink-JIRA-TFS -Google Sheets-Trello)</li>
            </ul>
          </Section>

          <Section title="Education">
            <IconWrapper Icon={Book}>
              Faculty of Computers and Artificial Intelligence, The University of Helwan (2018 – 2022) - GPA: Good
            </IconWrapper>
          </Section>

          <Section title="Certificates">
            <ul className="space-y-2">
              <li className="flex items-start">
                <Award className="mr-2 text-blue-600 flex-shrink-0" size={18} />
                <span className="text-gray-700">Introduction to Software Testing Concepts & Techniques CERTIFICATE</span>
              </li>
              <li className="flex items-start">
                <Award className="mr-2 text-blue-600 flex-shrink-0" size={18} />
                <span className="text-gray-700">Effective Test Case and Bug Report Writing Techniques Certificate – Mahara Tech</span>
              </li>
              <li className="flex items-start">
                <Award className="mr-2 text-blue-600 flex-shrink-0" size={18} />
                <span className="text-gray-700">Agile Methodology Certificate on the Edraak platform!</span>
              </li>
              <li className="flex items-start">
                <Award className="mr-2 text-blue-600 flex-shrink-0" size={18} />
                <span className="text-gray-700">Performance Testing with JMeter at Software Quality Academy</span>
              </li>
            </ul>
          </Section>

          <Section title="Software Tools">
            <div className="flex flex-wrap gap-2">
              {["Trello", "Jira", "JMeter", "Postman", "Visual Studio", "GitHub"].map((tool, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Languages">
            <div className="flex space-x-4">
              <IconWrapper Icon={Globe}>Arabic (Native)</IconWrapper>
              <IconWrapper Icon={Globe}>English (Professional Working Proficiency)</IconWrapper>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResume;
