import { Header } from "components/_mobile/Header";
import { Heading } from "components/Heading";
import { SearchForm } from "components/SearchForm";
import { useState } from "react";
import { useScreen } from "hooks/useScreen";


const SearchPage = () => {
    const [results, setResults] = useState()
    const { isTablet } = useScreen()
    return (
        <>
            {isTablet && <Header />}
            <div className="wrapper-content">
                <Heading className='search-heading'>Pesquisar</Heading>
                <SearchForm />
                <hr />

            </div>
        </>
    );
};

export default SearchPage;
