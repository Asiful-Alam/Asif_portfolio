
import {
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
  FaCompress,
  FaEdit,
  FaImage,
  FaFileImage,
} from 'react-icons/fa';
import { IoMdSwap } from 'react-icons/io';

const tools = [
  {
    icon: <IoMdSwap className="text-2xl text-red-500" />,
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
  },
  {
    icon: <IoMdSwap className="text-2xl text-red-500 rotate-90" />,
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
  },
  {
    icon: <FaCompress className="text-2xl text-green-600" />,
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
  },
  {
    icon: <FaFileWord className="text-2xl text-blue-500" />,
    title: 'PDF to Word',
    description: 'Easily convert your PDF files into DOC or DOCX documents with high accuracy.',
  },
  {
    icon: <FaFilePowerpoint className="text-2xl text-orange-500" />,
    title: 'PDF to PowerPoint',
    description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.',
  },
  {
    icon: <FaFileExcel className="text-2xl text-green-700" />,
    title: 'PDF to Excel',
    description: 'Pull data straight from PDFs into Excel spreadsheets in a few short seconds.',
  },
  {
    icon: <FaFileWord className="text-2xl text-blue-500" />,
    title: 'Word to PDF',
    description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
  },
  {
    icon: <FaFilePowerpoint className="text-2xl text-orange-500" />,
    title: 'PowerPoint to PDF',
    description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.',
  },
  {
    icon: <FaFileExcel className="text-2xl text-green-700" />,
    title: 'Excel to PDF',
    description: 'Make EXCEL spreadsheets easy to read by converting them to PDF.',
  },
  {
    icon: (
      <div className="relative">
        <FaEdit className="text-2xl text-purple-600" />
        <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white px-1 rounded-full">New!</span>
      </div>
    ),
    title: 'Edit PDF',
    description: 'Add text, images, shapes or annotations. Edit the size, font, and color of content.',
  },
  {
    icon: <FaImage className="text-2xl text-yellow-500" />,
    title: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
  },
  {
    icon: <FaFileImage className="text-2xl text-yellow-600" />,
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
  },
];

export default function ToolsSection() {
  return (
    <section className="px-4 py-12 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Tools</h2>
        <p className="text-gray-500 text-sm md:text-base">
          Explore all the powerful tools to manage your PDFs easily and efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                {tool.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{tool.title}</h3>
            <p className="text-sm text-gray-600 text-center">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
