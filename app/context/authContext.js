import { createContext, useContext, useState, useEffect } from "react";
import checkAuth from "@/app/actions/checkAuth";

const AuthContext = createContext();