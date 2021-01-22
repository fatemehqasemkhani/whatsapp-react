// @flow
import { baseURL } from "../store/request";

export const getArchives = () => `${baseURL}/archives`;
export const getThreads = () => `${baseURL}/threads`;
export const getMessages = (id: number) => `${baseURL}/threads/${id}/messages?message_id=${id}`;
export const postMessage = (id: number) => `${baseURL}/threads/${id}/messages`;
export const getContacts = () => `${baseURL}/contacts`;
