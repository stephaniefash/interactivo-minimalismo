import React from "react";
import "./infoSection.css"
import HeaderAndParagraph from "./headerAndParagraph/headerAndParagraph";

// header
// subheader
// paragraphOne title
// paragraph one content
// paragraph 2 title
// paragraph 2 content

const tempHeader = "PROJET DE MUSIQUE ÉLECTRONIQUE FRANÇAIS. L’ARTISTE M’A CONTACTÉ TRÈS TÔT DANS SON DÉVELOPPEMENT."
const tempBody = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const infoSection  = () => {

    return(<div className="info-section-container">
        this is the info section
        <HeaderAndParagraph header={tempHeader} body={tempBody}/>
    </div>)



}

export default infoSection;
