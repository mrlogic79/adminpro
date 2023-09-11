// import swal from 'sweetalert';

// const trushAlert=(itemId)=>{

//   swal({
//       title: "حذف آیتم",
//       text: `ایا میخواهید آیتم ${itemId} را حذف کنید`,
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//           axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res=>{
//               if(res.status ===200){
//                   const newUsers = usrers.filter(u=>u.id != itemId);
//                   setusers(newUsers)
//               }
//           })
//         swal("آیتم شما با موفقیت حذف شد", {
//           icon: "success",
//         });
//       } else {
//         swal("شما از حذف آیتم منصرف شدید");
//       }
//     });
// }

// export default trushAlert ;