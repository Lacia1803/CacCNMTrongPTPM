const projects = [
  {
    title: "Hệ thống Quản lý Thư viện",
    description:
      "Ứng dụng web quản lý thư viện với chức năng mượn/trả sách, quản lý thành viên. Frontend React, Backend Node.js/Express, Database PostgreSQL.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    status: "Hoàn thành",
    link: "https://github.com/Lacia1803/DoAnWebNangCao",
  },
  {
    title: "Website Portfolio Cá nhân",
    description:
      "Website giới thiệu bản thân và các dự án, xây dựng bằng Next.JS 15 với App Router và Tailwind CSS.",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
    link: "#",
  },
  {
    title: "Phân tích Cảm xúc Tiếng Việt",
    description:
      "Dự án Machine Learning phân loại 6 cảm xúc Ekman trên bình luận YouTube tiếng Việt sử dụng HuggingFace và Google Colab.",
    tech: ["Python", "HuggingFace", "Google Colab", "NLP"],
    status: "Hoàn thành",
    link: "#",
  },
  {
    title: "Game 2D Dungeon Crawler",
    description:
      "Đề xuất game 2D RPG khám phá hầm ngục (Thám Hiểm Hầm Ngục) sử dụng Unity, với hệ thống chiến đấu và lên cấp.",
    tech: ["Unity", "C#", "2D Game Dev"],
    status: "Đề xuất",
    link: "#",
  },
  {
    title: "Ứng dụng E-commerce PHP",
    description:
      "Website thương mại điện tử bán đồ gia dụng, xây dựng bằng PHP thuần và MySQL.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    status: "Hoàn thành",
    link: "https://github.com/maoleng/web-project-1",
  },
];

const statusColor: Record<string, string> = {
  "Hoàn thành": "bg-green-100 text-green-700",
  "Đang phát triển": "bg-yellow-100 text-yellow-700",
  "Đề xuất": "bg-purple-100 text-purple-700",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Dự án</h1>
      <p className="text-gray-500 mb-8">
        Một số dự án tiêu biểu tôi đã thực hiện trong quá trình học tập.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full shrink-0 ${statusColor[project.status] ?? "bg-gray-100 text-gray-700"}`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Xem trên GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
