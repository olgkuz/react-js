import  {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Card, Typography } from '@mui/material'

export default function  Blog () {

    const [articles, setArticles] = useState([])
   
    useEffect (()=> {
        const getArticles = async ()=> {
            
                const response = await fetch (' https://api.api-ninjas.com/v1/quotes ', {
                    method:'GET',
                    headers: {
                        "X-Api-Key": "onQNSmt1F/Gw3Unslt2q1Q==gHu98oPfHk0kwd24",
                        "Content-Type":"appLication/json"
                    
                    }  

                })
                const articles = await response.json();
                setArticles(articles);
            }
            getArticles()
        },[])
        return <Layout>
            {articles.map(({author,category,quote},i)=> <Box key={`${i}-article`}>
                <Card>
                    <Typography>{author}</Typography>
                    <Typography>{category}</Typography>
                    <Typography>{quote}</Typography>
                </Card>

            </Box>)}
        </Layout>
        }
