
import { Grid, Modal,Card } from "@mui/material";
import MDTypography from "../../components/MDTypography";
import { translateWord } from "../../locales/HandleLocale";
import MDButton from "../../components/MDButton";
import BusnissUnitApi from "../../CallingApis/BusnissUnitApi";
function BusnissUnitDelete (prop){
    
const DeleteTheRecord=()=>{
    
    BusnissUnitApi.DeleteOne(prop.recordId)
    .then((response)=>{
        console.log("response",response)
        prop.reloadData()
        prop.setOpenModel(false)
    })


}

    return (
    <Modal 
     sx={{ my: 20 ,mx:50}}
                  open={prop.openModal}
                //  onClose={handleClose}
                
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
                  >
                    <Card>
                      <br/>
                      <Grid>
                      <MDTypography id="modal-modal-title" variant="h3" component="h2"
                    textAlign="center">
          {translateWord("Confirm-the-delete")}
        </MDTypography>
    
                      </Grid>
                   <Grid>
                   <MDTypography sx={{ mx: 10 }}>
          <hr/>
        </MDTypography>
                   </Grid>
    
        <Grid>
        <MDTypography id="modal-modal-description" sx={{ mx: 10 }}>
          {translateWord("Are-you-sure-you-want-to-delete")} {translateWord("this-busniss-unit")}
        </MDTypography>
     </Grid>
     <br/>
     <Grid sx={{ mx: 10 }} container >
        <Grid item xs={4}>
            
     <MDButton onClick={DeleteTheRecord}   size="large"  variant="gradient" color="info" fullWidth  >
{translateWord("delete")}
              </MDButton>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
            
     <MDButton  onClick={()=>{prop.setOpenModel(false)}}  size="large"  variant="gradient" color="info" fullWidth  >
{translateWord("cancel")}
              </MDButton>
        </Grid>
     </Grid>

        <br/>
    
                    </Card>
                  </Modal>
    
    
    )
    
    }  
    
    
export default BusnissUnitDelete;