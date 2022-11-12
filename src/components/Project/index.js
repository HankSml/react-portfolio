import React from 'react'; 

// Individual Card build-out using props
function ProjectCards(props) {
    return (
        <div className="app-card">
            <div style={{
                backgroundImage: `url(${props.image})`
                }}>
                <div className="app-card-text">
                    <h3 className="card-link">
                        <a href={props.deploy} alt="Live Application" className='card-link'>
                            {props.name}
                        </a>
                    </h3>
                    <p>{props.topics}</p>
                    <p><a href={props.deploy} alt="Live Application" className='card-link'>Deployed Application</a></p>
                </div>
                <a href={props.github}><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github" className="icon"/></a>
            </div>
        </div>
    );
}
  export default ProjectCards;

