import { Box, Button, Card, CardMedia, Container, Divider, Grid, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import AppHeader from "../../Components/Header";
import getProductsCart from "../../utils/GetProductsCart";
import BackPackIcon from '@mui/icons-material/ArrowBack'
import { RoundedButtomClass } from "../../Components/RoundedButton";
import { useSelector } from "react-redux";
import CalcularPrecoTotal from "../../utils/CalcularPreco";
import { FormatNumber } from "../../utils/FormatNumer";
import DeleteIcon from '@mui/icons-material/Delete';
import BoxCart from "./BoxCart";
export default function Cart(){
    const Produtos  =useSelector(state => state.product.product)
    const Total = CalcularPrecoTotal(Produtos)
    const isLargeScreen = useMediaQuery('(max-width: 1200px)');
    const ismediumScreen = useMediaQuery('(max-width: 890px)');
    const isSmallScreen = useMediaQuery('(max-width: 445px)');
    return(

        <section>
            <AppHeader/>
            <Toolbar/>
            <Toolbar/>
            <Container  style={{flexDirection: ismediumScreen && 'column'}} sx={{justifyContent:'space-between',pb: '3rem',display:"flex", gap:'4.44rem'}}>
                <Box sx={{width: isLargeScreen ? 'auto' :'44rem'}}>
                    <Button href="/" variant="contained"  sx={RoundedButtomClass}>
                        <BackPackIcon/>

                        Voltar
                    </Button>
                    <Typography mt="2.25rem"c>
                        SEU CARRINHO
                    </Typography>
                    <Typography fontWeight="400" color="#6A6A6A" fontSize="1rem">
                        ({Produtos.length} PRODUTOS) TOTAL DE 
                        <Typography component="span" fontWeight="bold"color="#2E2F37"  ml={0.5}>
                            {FormatNumber(Total)}.00MT
                        </Typography>
                    </Typography>
                    <Box display={"flex"} flexDirection="column" gap="1.88rem" mt="1.8rem">
                        {
                            Produtos.length ?
                            (
                            Produtos.map((produto)=>(
                                <BoxCart 
                                {...produto}
                                key={produto.id}/>
                            ))) : 
                            <Typography fontWeight="400" color="#6A6A6A" fontSize="1.2rem">
                                O seu carrinho esta vazio.
                            </Typography>

                        }
                    </Box>
                </Box>
                <Card sx={{position:'sticky',top:'105px',py:'1.5rem',px:'1.5rem',width: isSmallScreen ? '100%' : '22rem', height:isSmallScreen ? 'fit-content' : '35rem'}}> 
                    <Typography color="#2E2F37" fontSize="1rem" fontWeight="700">
                        RESUMO DO PEDIDO
                    </Typography>
                    <Box display="flex" mt="1.38rem" color="#2E2F37"  fontWeight={400} justifyContent="space-between">
                        <Typography>
                            Total de pedido
                        </Typography>
                        <Typography>
                            {FormatNumber(Total)}.00MT
                        </Typography>
                    </Box>
                    <Box mb="1.20rem" display="flex" mt="0.88rem" color="#2E2F37"  fontWeight={400} justifyContent="space-between">
                        <Typography>
                            Valor de entrega
                        </Typography>
                        <Typography>
                            500.00MT
                        </Typography>
                    </Box>
                    <Divider/>
                    <Box mb="1.20rem" display="flex" mt="0.88rem" color="#2E2F37"  fontWeight={400} justifyContent="space-between">
                        <Typography color="#2E2F37" fontSize="1rem" fontWeight="700">
                            Total
                        </Typography>
                        <Typography color="#2E2F37" fontSize="1rem" fontWeight="700">
                            {Total &&  FormatNumber(Total + 500)}.00MT
                        </Typography>
                    </Box>
                    <Button sx={{bgcolor:'#2DB54B',":hover":{bgcolor:"#51b767"}, mt:'5rem', width:'100%'}} variant="contained">
                        Finalizar Compra
                    </Button>
                    <Box
                        position={`${isSmallScreen ?"relative" : 'absolute'}`}
                        bottom={3}
                        mt={6}
                        gap={0.3}
                        display="flex"
                        flexDirection="column"
                    >
                        <Typography
                        fontWeight={500}
                        sx={{cursor:'pointer', textDecorationLine:'underline'}}
                        fontSize="0.85rem"
                        color="#617480"

                        >
                            AJUDA
                        </Typography>
                        <Typography
                        fontWeight={500}
                        fontSize="0.85rem"
                        sx={{cursor:'pointer', textDecorationLine:'underline'}}
                        color="#617480"

                        >
                            REEMBOLSO
                        </Typography>
                        <Typography
                        fontWeight={500}
                        fontSize="0.85rem"
                        sx={{cursor:'pointer', textDecorationLine:'underline'}}
                        color="#617480"

                        >
                            ENTREGAS E FRETE
                        </Typography>
                        <Typography
                        fontWeight={500}
                        sx={{cursor:'pointer', textDecorationLine:'underline'}}
                        fontSize="0.85rem"
                        color="#617480"

                        >
                            TROCAS E DEVOLUÇÕES
                        </Typography>

                    </Box>
                </Card>
            </Container>
        </section>
    )
}