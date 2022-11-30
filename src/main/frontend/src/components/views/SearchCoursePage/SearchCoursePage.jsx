import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  currentPageState,
  serverTimeState,
  currentErrorState,
} from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import SearchCourseList from "./SearchCourseList";
import SearchCourseFilter from "./SearchCourseFilter";
import axios from "axios";

function SearchCoursePage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // current states
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/search-course") {
      setCurrentPageG("search-course");
    }
    axios
      .post("/api/cookieGet")
      .then((res) => {
        setUserInfoG(res.data);
        if (res.data.userRole === "ADMIN") {
          navigate("/");
          setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
          setTimeout(function () {
            setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
          }, 2000);
        }
      })
      .catch((error) => {
        navigate("/");
        setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
        setTimeout(function () {
          setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
        }, 2000);
      });
    axios.get("/api/time").then((res) => {
      let time = res.data.split(":");
      time[2] = time[2].split(".")[0];
      const second =
        Number(time[2]) + Number(time[1]) * 60 + Number(time[0]) * 3600;
      setServerTimeG(second);
    });
    axios.get("/api/courseListGet").then((res) => {
      setCourseListG(res.data.content);
    });
    axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
  }, []);

  return (
    <Wrapper>
      <SizingBox>
        <SearchCourseFilter  />
        <SearchCourseList />
      </SizingBox>
    </Wrapper>
  );
}

export default SearchCoursePage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const SizingBox = styled.div`
  width: 95%;
  height: 95%;
`;
