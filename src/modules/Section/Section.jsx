import s from './Section.module.css'

const Section = ({children}) => {
    return (
        <div className={s.main_content}>
            <section className={s.section}>{children}</section>
        </div>
    )
}

export default Section;