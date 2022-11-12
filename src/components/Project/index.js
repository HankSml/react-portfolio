import React from 'react'; 

// Individual Card build-out using props
function ProjectCards(props) {
    return (
        <div class="app-card">
            <div style="background-image: url({props.image})">
                <div class="app-card-text">
                    <h3 class="card-link">{props.name}</h3>
                    <p>{props.topics}</p>
                    <a href={props.github} alt="Github Link">Github</a>
                    <a href={props.deploy} alt="Live Application">Deployed Application</a>
                </div>
            </div>
        </div>
    );
}
  
  export default ProjectCards;