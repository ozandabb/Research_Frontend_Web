// import { toast } from 'react-toastify';
// import { confirmAlert } from "react-confirm-alert";

class Config{
  constructor(){
    //backend server details
    this.host = "http://127.0.0.1:";
    // this.host = "http://saleserp-env.eba-u2mkdt2x.us-east-2.elasticbeanstalk.com";
    this.port = "8080";
    // this.port = "";
    this.password = "";
  }

  // for toast messages
//   setToast(msg){
//     toast.info( msg, {
//       hideProgressBar: true,
//       closeOnClick: true,
//       draggable: true,
//     });
//   }

  //Toast for error display
//   setErrorToast(msg){
//     toast.error( msg, {
//       hideProgressBar: true,
//       closeOnClick: true,
//       draggable: true,
//     });
//   }

  //delete confirm alert
//   setDeleteConfirmAlert(title , msg , confirm , cancel ){
//     confirmAlert({
//       title: title,
//       message: msg,
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => confirm()
//         },
//         {
//           label: 'No',
//           onClick: () => cancel()
//         }
//       ]
//     });
//   }

  //Validation alert
//   setValidateConfirmAlert(title , msg , confirm , cancel ){
//     confirmAlert({
//       title: title,
//       message: msg,
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => confirm()
//         },
//         {
//           label: 'No',
//           onClick: () => cancel()
//         }
//       ]
//     });
//   }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}








}

var obj = new Config();
export default obj;