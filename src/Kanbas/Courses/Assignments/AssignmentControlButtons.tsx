import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import * as assignmentsClient from "./client";
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

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to remove the assignment?")) {
      try {
          await assignmentsClient.deleteAssignment(assignmentId);
          dispatch(deleteAssignment(assignmentId));
          navigate(`/Kanbas/Courses/${cid}/Assignments`);
      } catch (error) {
          console.error("Error deleting assignment:", error);
      }
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

