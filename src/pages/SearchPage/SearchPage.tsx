import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../svgFile/symbol-defs.svg';
import Section from '../../modules/Section/Section';
import * as dataApi from '../../services/dataApi';
import { MyContext } from '../../App';
import { SqlQuery } from '../../types/itemTypes';
import { SearchResponse } from '../../types/searchTypes';
import { SearchCustomersItem } from '../../types/searchTypes';
import { SearchProductsItem } from '../../types/searchTypes'; 
import s from './SearchPage.module.css'

const SearchPage: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('products');
    const [searchTextInput, setSearchTextInput] = useState<string>('');
    const [responseData, setResponseData] = useState<SearchCustomersItem[] | SearchProductsItem[] | null>(null);
    const [loader, setLoader] = useState(false);

    const {  handleDashChange } = useContext(MyContext);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);

        if(searchTextInput) {
            dataApi.getSearchInformation(e.target.value, searchTextInput).then((res: SearchResponse) => {
                setResponseData(res.data)
                handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                    const updatedDash = [res.sqlQueries, ...prevState, ]
                    return updatedDash;
                  });

            })
        }
      };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTextInput(e.target.value);
    };

    const formSubmit = (e: React.ChangeEvent<unknown>) => {
        e.preventDefault();
        dataApi.getSearchInformation(selectedValue, searchTextInput).then((res: SearchResponse) => {
            setResponseData(res.data)

            handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                const updatedDash = [res.sqlQueries, ...prevState, ]
                return updatedDash;
              });
         }
        )
    }

    const fetchSearchResult = (searchResult: SearchProductsItem[] | SearchCustomersItem[]): searchResult is SearchProductsItem[] => {
        console.log(searchResult[0])
		return (searchResult[0] as SearchProductsItem) !== undefined;
	};
    

    return (
        <Section>
            <div className={s.container}>
               <h3 className={s.title_search}>Search Database</h3>
                <form onSubmit={formSubmit}>
				 <div className={s.input_container}>
					<input
                        className={s.input}
						type="search"
						name="search"
						placeholder="Enter keyword..."
						value={searchTextInput}
						onChange={handleInput}
					/>
                    <span className={s.svg_style}>
                     <svg width={15} height={15} >
                       <use xlinkHref={`${Search}#icon-search`} ></use>
                     </svg>
                    </span>
				 </div>
				
                <div className={s.radio_container}>
				<legend className={s.legend}>Tables</legend>
                  <div className={s.labels_st}>	
					<label htmlFor="products" className={s.label_radio}>
						<input
                            className={s.input_button}
							type="radio"
							id="products"
							name="table"
							value="products"
							defaultChecked
							onChange={handleRadioChange}
						/>{" "}
                    <span className={s.check}></span>
					<span className={s.radio_name}>Products</span>
					</label>
					<label htmlFor="customers" className={s.label_radio} >
						<input
                            className={s.input_button}
							type="radio"
							id="customers"
							name="table"
							value="customers"
							onChange={handleRadioChange}
						/>{" "}
                        <span className={s.check}></span>
                        <span className={s.radio_name}>Customers</span>
						
					</label>
                 </div>
                    </div>
			
				<h4 className={s.result}>Search results</h4>
				{loader && <h4>Searching Data</h4>}

                <div>
                    {responseData === null ? (<p>No results</p>)
                    : (
                        <div>
                            { selectedValue === 'products' ? (
                                <div>
                                    {responseData.map((item, index) => (
                                    <div key={item.id}>                   
                                      <p className={s.output}>
                                       <Link className={s.visited} to={`/product/${item.id}`}>{item.name}</Link>
                                      </p>
                                      { 'quantPerUnit' in item && (
                                         <p className={s.rext_output}>#{index+1}, Quantity Per Unit:{item.quantPerUnit}, Price: {item.price}, Stock: {item.stock} </p>
                                      )}

                                     </div>

								  ))}
                                </div>
                            ) : (
                                <div>
                                    {responseData.map((item, index ) => (
                                    <div key={item.id}>                   
                                    <p className={s.output}>
                                      <Link className={s.visited} to={`/customer/${item.id}`}>{item.name}</Link>
                                    </p>
                                    {'contact' in item && (
                                     <p className={s.rext_output}>#{index+1}, Contact:{item.contact}, Title: {item.title}, Phone: {item.phone} </p>
                                    )}

                                </div>
								  ))}
                                </div>
                            )
 
                            }
                        </div>
                    )
                    }

				</div>


             
            {/* <output name="result" htmlFor="searchInput">
					{responseData ? (
						<>
							{fetchSearchResult(responseData)
								? responseData.map(({id, name, quantPerUnit, price, stock}, index) => (
                                    <div key={id}>                   
                                      <p className={s.output}>
                                       <Link className={s.visited} to={`/product/${id}`}>{name}</Link>
                                      </p>
                                       <p className={s.rext_output}>#{index+1}, Quantity Per Unit:{quantPerUnit}, Price: {price}, Stock: {stock} </p>
                                     </div>

								  ))
								: responseData.map(({ id, name, contact, title, phone }, index ) => (
                                    <div key={id}>                   
                                    <p className={s.output}>
                                      <Link className={s.visited} to={`/customer/${id}`}>{name}</Link>
                                    </p>
                                    <p className={s.rext_output}>#{index+1}, Contact:{contact}, Title: {title}, Phone: {phone} </p>
                                </div>
								  ))}
						</>
					) : 
						<p>No results</p>
					}
				</output> */}
			</form>
            </div>
        </Section>
    )
}


export default SearchPage;