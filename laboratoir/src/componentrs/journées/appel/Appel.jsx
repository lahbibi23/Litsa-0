
import Navig from "../../navigation/Navig"
import "./Appel.css"


function Appel() {
    return (
        <>

            <Navig />
            <div className="présen ">
                Chers doctorants, étudiants en Master et enseignants chercheurs, c’est avec un immense
                plaisir que le laboratoire de Recherche LITSA « Innovation Technologique et Sécurité
                Alimentaire » LR22 AGR01-ESIAT,vous annonce l’organisation de la 1 ère édition de ses
                Journées Scientifiques sous le thème : <br />
                «Valorisation des ressources naturelles en Nutrition fonctionnelle»
                Les journées scientifiques du LITSA se tiendront le 1 er et 2 Mars à l`Ecole Supérieure des
                Industries Alimentaires de Tunis (ESIAT). <br />
                L’équipe organisatrice à l’honneur de vous inviter à s’inscrire à cet événement sur notre site
                www……………………, ou nous contacter via l’adresse e-mail:  Js.LITSA@gmail.com.
            </div>


            <div className="divider" style={{ marginTop: "2rem", marginBottom: "1rem" }} />
            <h3>Dates Importantes</h3>
            <div className="divider" style={{ marginTop: "2rem", marginBottom: "1rem" }} />



            <div className="dates ">
                <h4 style={{ textDecoration: "underline" }}>
                    Date limite de soumission des résumés  : <br />
                </h4>
                Le 27 Janvier 2024 :  pour les communications orales <br />
                Le 28 Janvier 2024 :  pour les communications par affiches <br />
                Réponse : au plus tard le 17 Février 2024 <br />
            </div>


            <div className="divider" style={{ marginTop: "2rem", marginBottom: "1rem" }} />
            <h3>  Comités</h3>
            <div className="divider" style={{ marginTop: "2rem", marginBottom: "1rem" }} />





            <div className="commité  flex">
                <section className="comiI border">
                    <h3>  I. Comité d’organisation</h3>
                    <div className="dates ">
                    <br />
                        <br />
                        <br />
                        <br />
                        Mouna BOULARES
                        Imen MAHMOUDI
                        Imen ZAGHBIB
                    </div>


                </section>

                <section className="comiII">
                    <h3> II. Comité Scientifique de sélection des communications Orales</h3>
                    <div className="dates ">
                    Mouna BOULARES
                    Olfa BEN MOUSSA
                    Moncef CHOUAIBI
                    Sonia BOUDICHE
                    Imen MAHMOUDI
                    Imen ZAGHBIB
                    </div>
                    
                </section>

                <section className="comiIII">
                    <h3>III. Comité Scientifique de sélection des communications par Affiches</h3>
                    <div className="dates ">
                    Atef LAKOUD
                    Mélika MANKAI
                    Soumaya ARAFA
                    Slim LAMINE
                    Youkabed ZARROUG
                    Ramzi MEJRI
                    </div>
                   
                </section>

            </div>

        </>
    )
}

export default Appel