
import s from './HomePage.module.css'

const HomePage = () => {
    return (
 
     <section className={s.main_section}> 
         <div className={s.card_content}>
            <p className={s.card_title}>Welcome to Northwind Traders</p>
            <div className={s.card_subtitle}>
              <p className={s.card_subtitleGray}>Running on Cloudflare's D1</p>
             </div>
             <img className={s.card_logo} src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public" alt="database logo" />

             <p className={s.text_base}>This is a demo of the Northwind dataset, running on <a className={s.card_link} href="https://workers.cloudflare.com/">Cloudflare Workers</a>, and D1 - Cloudflare's newest SQL database, running on SQLite.</p>

             <p className={s.text_base}>Read our <a className={s.card_link} href="https://blog.cloudflare.com/introducing-d1/">D1 announcement </a>to learn more about D1.</p>

             <p className={s.text_base}>This dataset was sourced from <a className={s.card_link} href="https://github.com/jpwhite3/northwind-SQLite3">northwind-SQLite3</a>.</p>

             <p className={s.text_base}>You can use the UI to explore Supplies, Orders, Customers, Employees and Products, or you can use search if you know what you're looking for.</p>

         </div>
         </section> 
      
    )
}


export default HomePage;