import {
    Resume1,
    Resume2,
    ResumeInformations,
    Resumes,
    VerticalLine 
} from "./styles";

export function ResumeItem({
    title,
    value
}
){
    return(
        <ResumeInformations>
            <VerticalLine/>
            <Resumes>
                <Resume1>{title}</Resume1>
                <Resume2>{value}</Resume2>
            </Resumes>
        </ResumeInformations>
    )
}