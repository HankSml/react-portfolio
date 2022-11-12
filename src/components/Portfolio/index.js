import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../projects.json'

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h2 className="title">Development</h2>
            <hr></hr>
          </div>

          <Wrapper id="app-body">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;