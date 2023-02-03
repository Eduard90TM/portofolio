import React from 'react';
import portofolio from '../data/portofolio';
import Portofolioitem from './Portofolioitem';
function Portofolio() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portofolio.map((project, i) => (
          <Portofolioitem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
