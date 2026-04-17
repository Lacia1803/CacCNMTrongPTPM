import Counter from "@/components/counter";
import ThemeToggle from "@/components/theme-toggle";
import CopyButton from "@/components/copy-button";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        level: "Thành thạo",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "Next.JS",
        level: "Trung cấp",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "TypeScript",
        level: "Trung cấp",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "Tailwind CSS",
        level: "Thành thạo",
        color: "bg-blue-100 text-blue-700",
      },
      {
        name: "HTML / CSS",
        level: "Thành thạo",
        color: "bg-blue-100 text-blue-700",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        level: "Trung cấp",
        color: "bg-green-100 text-green-700",
      },
      {
        name: "Express",
        level: "Trung cấp",
        color: "bg-green-100 text-green-700",
      },
      {
        name: "PostgreSQL",
        level: "Cơ bản",
        color: "bg-green-100 text-green-700",
      },
      { name: "PHP", level: "Cơ bản", color: "bg-green-100 text-green-700" },
    ],
  },
  {
    category: "DevOps & Công cụ",
    skills: [
      {
        name: "Git & GitHub",
        level: "Thành thạo",
        color: "bg-orange-100 text-orange-700",
      },
      {
        name: "Docker",
        level: "Cơ bản",
        color: "bg-orange-100 text-orange-700",
      },
      {
        name: "GitHub Actions",
        level: "Cơ bản",
        color: "bg-orange-100 text-orange-700",
      },
      {
        name: "VS Code",
        level: "Thành thạo",
        color: "bg-orange-100 text-orange-700",
      },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      {
        name: "Python",
        level: "Trung cấp",
        color: "bg-purple-100 text-purple-700",
      },
      {
        name: "Google Colab",
        level: "Thành thạo",
        color: "bg-purple-100 text-purple-700",
      },
      {
        name: "HuggingFace",
        level: "Cơ bản",
        color: "bg-purple-100 text-purple-700",
      },
      {
        name: "Orange Data Mining",
        level: "Cơ bản",
        color: "bg-purple-100 text-purple-700",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Kỹ năng</h1>
      <p className="text-gray-500 mb-8">
        Tổng hợp các kỹ năng lập trình tôi đã học và thực hành.
      </p>

      {/* Skill groups */}
      <div className="space-y-10 mb-16">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {group.category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`rounded-lg p-3 text-center ${skill.color}`}
                >
                  <p className="font-medium text-sm">{skill.name}</p>
                  <p className="text-xs mt-1 opacity-75">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Demo Client Components */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Demo Client Components</h2>
        <p className="text-sm text-gray-500 mb-6">
          Các component bên dưới là Client Components (có{" "}
          <code className="bg-gray-200 px-1 rounded">
            &ldquo;use client&rdquo;
          </code>
          ) — chúng tương tác với người dùng trực tiếp trên trình duyệt.
        </p>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Counter — Bộ đếm:
            </p>
            <Counter />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              ThemeToggle — Chuyển giao diện:
            </p>
            <ThemeToggle />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              CopyButton — Copy vào clipboard:
            </p>
            <CopyButton text="github.com/Lacia1803" />
          </div>
        </div>
      </div>
    </div>
  );
}
