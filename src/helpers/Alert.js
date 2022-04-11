import swal from 'sweetalert';

const SweetAlert = (props) => {
  const { title, text, icon } = props;
  return swal({
    title: title,
    text: text,
    icon: icon,
    dangerMode: true,
    closeOnClickOutside: true,
    buttons: {
      confirm:false
    }
  });
};
export default SweetAlert;
