interface UserInfo {
  id:string;
  userName?:string; // 用户名非必须
  password:string;
  type:number; // 0:管理员 ；1:普通用户 可自行定义
}

export default UserInfo;