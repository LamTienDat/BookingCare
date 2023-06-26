import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
  getAllDoctor,
  saveDetailDoctorsService,
} from "../../services/userService";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
        console.log("check fetch gender start ", getState);
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      console.log("fetch gender failed ", e);
      dispatch(fetchGenderFailed());
    }
  };
};

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
        console.log("check fetch position start ", getState);
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      console.log("fetch position failed ", e);
      dispatch(fetchPositionFailed());
    }
  };
};
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
        console.log("check fetch role start ", getState);
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      console.log("fetch role failed ", e);
      dispatch(fetchRoleFailed());
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("new user info: ", res);
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
        toast.success("Create user success !");
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      console.log("save user failed ", e);
      dispatch(saveUserFailed());
    }
  };
};

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      console.log("fetchAllUsers failed ", e);
      dispatch(fetchAllUsersFailed());
    }
  };
};

export const deleteNewUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
        toast.success("Delete user success !");
      } else {
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      console.log("delete user failed ", e);
      dispatch(deleteUserFailed());
    }
  };
};

export const editUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
        toast.success("edit user success !");
      } else {
        dispatch(editUserFailed());
        toast.error("edit user failed !");
      }
    } catch (e) {
      toast.error("edit user failed !");
      dispatch(editUserFailed());
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});
export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService("");

      if (res && res.errorCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
        });
      }
    } catch (e) {
      console.log("failed ");
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
      });
    }
  };
};

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctor();
      // console.log("check res: ", res);
      if (res && res.errorCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
        });
      }
    } catch (e) {
      console.log("failed ");
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
      });
    }
  };
};

export const saveDetailsDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorsService(data);
      console.log("check data: ", res);
      if (res && res.errorCode === 0) {
        dispatch({
          type: actionTypes.SAVE_DETAILS_DOCTOR_SUCCESS,
        });
        toast.success("Save doctor success !");
      } else {
        console.log("error response", res);
        dispatch({
          type: actionTypes.SAVE_DETAILS_DOCTOR_FAILED,
        });
        toast.error("Save doctor failed !");
      }
    } catch (e) {
      console.log("failed ");
      dispatch({
        type: actionTypes.SAVE_DETAILS_DOCTOR_FAILED,
      });
      toast.error("Save doctor failed !");
    }
  };
};

export const fetchAllShedule = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("TIME");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_SCHEDULE_SUCCESS,
          dataSchedule: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_SCHEDULE_FAILED,
        });
      }
    } catch (e) {
      console.log("failed ");
      dispatch({
        type: actionTypes.FETCH_ALL_SCHEDULE_FAILED,
      });
    }
  };
};
