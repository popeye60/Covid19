import React from 'react';
import './css/covid.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Covid extends React.Component {
    render()
    {
    let data = this.props.data;
        return (
        <>
        <Grid container spacing={3} style={{flexGrow: 1}}>
          <Grid xs={12}>
            <Typography class="title2" variant="h1" textAlign="center" gutterBottom>
            รายงานสถานการณ์ โควิด-19
            </Typography>
            <Typography class="title3" variant="h2" textAlign="center" gutterBottom>
            อัพเดทข้อมูลล่าสุด : {data.UpdateDate}
            </Typography>
            <Card class="root" elevation={0}>
                <Typography variant="h2" class="title1" textAlign="center">ติดเชื้อสะสม</Typography>
                <Typography variant="h1" class="title" textAlign="center">{data.Confirmed}</Typography>
                <Typography variant="h3" class="title1" textAlign="center">[&nbsp;+&nbsp;{data.NewConfirmed}&nbsp;]</Typography>
            </Card>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={2} style={{ marginLeft:'30%'}}>
                <Grid item xs={4}>
                    <Card class="card1" elevation={0}>
                        <Typography variant="h2" class="title1" textAlign="center">หายแล้ว</Typography>
                        <Typography variant="h1" class="title" textAlign="center">{data.Recovered}</Typography>
                        <Typography variant="h4" class="title1" textAlign="center">[&nbsp;+&nbsp;{data.NewRecovered}&nbsp;]</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card class="card2" elevation={0}>
                        <Typography variant="h2" class="title1" textAlign="center">รักษาอยู่ใน รพ.</Typography>
                        <Typography variant="h1" class="title" textAlign="center">{data.Hospitalized}</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card class="card3" elevation={0}>
                        <Typography variant="h2" class="title1" textAlign="center">เสียชีวิต</Typography>
                        <Typography variant="h1" class="title" textAlign="center">{data.Deaths}</Typography>
                    </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </>
        )
    }
}
export default Covid;
