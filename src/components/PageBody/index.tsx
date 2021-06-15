import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaArrowLeft,  FaLink, FaPlus, FaTrash, FaWallet } from 'react-icons/fa';
// import addIcon from '../../assets/images/icons/add-white.svg';

import './styles.css'

interface PageBodyProps {
    title: string;
    link?: string;
    newPost?: boolean;
    trash?: boolean;
    creditPage?: boolean;
}

const  PageBody: React.FC<PageBodyProps> = ({ title, link,  children, newPost, trash, creditPage}) => {
    const history = useHistory();
    return (
        // <div className="container">
            <article className="page-body">
               <header className="top-header">
                    <div className="top-bar-container">
                        <div className="wrap-title">
                            <Link to="" onClick={ () => history.goBack()}>
                                <FaArrowLeft size={20}/>
                            </Link>
                            <h1>{title}</h1>
                        </div>

                       <div className="wrapper-buttons">
                        { trash && (
                                <Link to="#" className="trash">
                                    <FaTrash size={17} />
                                    Excluir
                                    {/* <img src={addIcon} alt="Novo cadastro"/> */}
                                </Link>
                            )}
                            
                            { link && (
                                <Link to= {link}>
                                    Cadastrar Novo
                                    <FaPlus size={17}/>
                                    {/* <img src={addIcon} alt="Novo cadastro"/> */}
                                </Link>
                            )}
                       </div>

                       {creditPage && (
                           <div className="credit-page">
                               <FaWallet size={25}/>
                               <div className="your-credits">
                                   Seus créditos
                                   <h1>12.250</h1>
                               </div>
                           </div>
                       )}
                        
                    </div>
                </header>
               
               
                {children}
            </article>
 
        // </div>
    )
}

export default PageBody;