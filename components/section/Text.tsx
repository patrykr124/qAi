interface Props {
    children: React.ReactNode

}

export default function Text({ children }: Props) {
    return (

        <div className={` relative`}>

            <div className="wrapper pt-40 pb-[100vh] flex flex-col gap-8">

                <h2 className="z-50 pointer-events-none"><b>Technologia</b> na Twoich <b>warunkach</b></h2>

                <div className="flex pointer-events-none z-50 gap-8">
                    <p className="flex-1 text-justify">Nasza platforma wyróżnia się podejściem on-prem, które gwarantuje pełną kontrolę nad danymi.
                        <br></br> <br></br>
                        - Bezpieczeństwo danych Dane pozostają wyłącznie w środowisku klienta, co minimalizuje ryzyko wycieku lub nieautoryzowanego dostępu. Organizacje mogą spełnić nawet najbardziej rygorystyczne wymagania bezpieczeństwa, co jest kluczowe w sektorach takich jak administracja publiczna czy bankowość.
                        <br></br> <br></br>
                        - Prywatność 
                        <br></br> <br></br>
                        - Brak konieczności przesyłania danych na zewnętrzne serwery, takie jak OpenAI, gwarantuje zgodność z RODO. Dane pozostają w infrastrukturze klienta, co redukuje ryzyko nieautoryzowanego dostępu i wspiera ochronę prywatności użytkowników.
                        <br></br> <br></br>
                        Pełna kontrola nad danymi
                        Rozwiązania on-premise eliminują ryzyko wtórnego wykorzystania danych, co zdarza się w chmurze. Klienci mają pełne zarządzanie danymi, co szczególnie odpowiada potrzebom sektorów regulowanych, gdzie integralność danych jest kluczowa.
                        <br></br> <br></br>
                        Skalowalność i personalizacja
                        Rozwiązania są elastyczne i dostosowane do specyficznych potrzeb organizacji. Umożliwiają rozwój w miarę wzrostu firmy, jednocześnie zapewniając efektywność i optymalizację kosztów.</p>
                    <p className="flex-1 ">qAI to nowoczesny hub łączący innowacyjne firmy, które wykorzystują AI do rozwiązywania złożonych problemów w sektorach takich jak medycyna, edukacja czy diagnostyka. <br></br> <br></br> Wspieramy transformację cyfrową, udostępniając technologie poprawiające jakość życia, optymalizujące procesy biznesowe i zwiększające efektywność.
                        <br></br> <br></br>
                        Nasza platforma to przestrzeń, gdzie innowacje stają się dostępne dla każdego, kto poszukuje efektywnych i skalowalnych narzędzi. Każda firma w naszym hubie działa w duchu innowacji, wprowadzając rozwiązania realnie wpływające na postęp w swoich branżach. Stawiamy na dostępność, personalizację i wsparcie użytkowników na każdym etapie transformacji technologicznej.
                        <br></br> <br></br>
                        Firmy w naszym hubie wyróżniają się zaawansowaną technologią, personalizacją i troską o bezpieczeństwo danych. Modele on-prem gwarantują pełną kontrolę nad zasobami, eliminując ryzyko nieautoryzowanego dostępu i wspierając zgodność z regulacjami, np. RODO, co pozwala przedsiębiorstwom wdrażać AI bez obaw o prywatność.
                    </p>
                </div>
                {children}
            </div>


        </div>

    )
}