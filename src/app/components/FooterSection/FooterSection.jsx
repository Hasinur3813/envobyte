const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-gray-400 hover:text-white">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
