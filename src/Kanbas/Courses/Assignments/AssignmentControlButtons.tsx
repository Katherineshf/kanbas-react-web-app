import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

interface AssignmentControlButtonsProps {
  assignmentId: string; // Define the prop type
}

export default function AssignmentControlButtons(
  //{assignmentId, deleteAssignment}: {assignmentId: string; deleteAssignment: (assignmentId: string) => void;}
  { assignmentId }: { assignmentId: string }
) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to remove the assignment?")) {
        console.log("Deleting assignment:", assignmentId);
        dispatch(deleteAssignment(assignmentId));
        console.log("Deleted assignment. Checking state");
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      }
};

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

