import { ButtonModal } from "../buttonModal/buttonModal";
import { Modal } from "./Modal";

export const SetaModal = () => {
    const [modal, setModal] = useState(false);
    return ( <>
    
    <div>
        <div>{modal ? "modal aberto" : "fechado"}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>
    
    </> );
}