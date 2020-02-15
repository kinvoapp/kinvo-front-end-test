import React from 'react';
import DataTable from 'react-data-table-component';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const columns = [
    {
        name: '',
        selector: 'productName',
        sortable: true,
    },
    {
        name: 'SALDO ATUAL',
        selector: 'equity',
        sortable: true,
    },
    {
        name: 'QUANT',
        selector: 'amount',
        sortable: true,
    },
    {
        name: 'PREÇO MÉDIO',
        selector: 'averagePrice',
        sortable: true,
    },
    {
        name: 'ÚLTIMA COTAÇÃO',
        selector: 'lastQuotation',
        sortable: true,
    },
    {
        name: 'YIELD (1M)',
        selector: 'currentMonthYield',
        sortable: true,
    },
    {
        name: 'YIELD (12M)',
        selector: 'lastTwelveMonthsYeld',
        sortable: true,
    }
];

const SearchIt = ({ onChange, value }) => 
    <Paper component="form" style={{ marginLeft: "70%", padding: '2px 4px', display: 'flex', 
        alignItems: 'center', width: "400", backgroundColor:"#d5d3f0", 
        boxShadow:"none", height:"40px", borderRadius:"20px" }}>
        <IconButton type="submit" style={{ padding: "10px" }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase
            style={{ padding: "10px" }}
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange = {onChange}
            value = {value}
        />
    </Paper>
  ;

export default function Products({ setFilter, filter , filteredData, data }) {
    return (
        <DataTable 
            columns={columns} 
            data={filteredData} 
            subHeader
            subHeaderComponent={
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={2}>
                                <Paper style={{ display: 'flex',
                                    overflow: 'auto',
                                    flexDirection: 'column', alignItems: 'center' }}>
                                    <p style = {{ color:"gray", alignItems:'center' }}>SALDO BRUTO<br/>
                                        <h1>R$ {data.grossBalance}</h1> <br/>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ display: 'flex',
                                    overflow: 'auto',
                                    flexDirection: 'column', alignItems: 'center' }}>
                                    <p style = {{ color:"gray", alignItems:'center' }}>VALOR APLICADO<br/>
                                        <h1>R$ {data.appliedValue}</h1> <br/>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ display: 'flex',
                                    overflow: 'auto',
                                    flexDirection: 'column', alignItems: 'center' }}>
                                    <p style = {{ color:"gray", alignItems:'center' }}>GANHO DE CAPITAL<br/>
                                        <h1>R$ {data.capitalGains}</h1> <br/>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ display: 'flex',
                                    overflow: 'auto',
                                    flexDirection: 'column', alignItems: 'center' }}>
                                    <p style = {{ color:"gray", alignItems:'center' }}>TOTAL DISTRIBUIDOS<br/>
                                        <h1>R$ {data.earnings}</h1> <br/>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Paper style={{ display: 'flex',
                                    overflow: 'auto',
                                    flexDirection: 'column', alignItems: 'center' }}>
                                    <p style = {{ color:"gray", alignItems:'center' }}>YIELD<br/>
                                        <h1>R$ {data.yield}</h1> <br/>
                                    </p>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={12}>
                        <SearchIt
                            onChange={e => setFilter(e.target.value)}
                            value={filter}
                        />
                    </Grid>
                </Grid>
            }
        />
    );
}
