import React from "react"

import { storiesOf } from "@storybook/react"

// for having bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css"

import DashboardCard from "../components/PageDashboard/DashboardCard"
import NavbarLeft from "../components/NavbarLeft/NavbarLeft"

import NavbarTop from "../components/NavbarTop/NavbarTop"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"

import NavbarTopNotif from "../components/NavbarTop/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTop/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTop/NavbarTopNotifBubble"

import FoldersBarTop from "../components/PageFolders/FoldersBarTop"
import GetStartedSignInEmail from "../components/PageGetStarted/GetStartedSignInEmail"
import GetStartedSignInTitle from "../components/PageGetStarted/GetStartedSignInTitle"
import GetStartedSignInButton from "../components/PageGetStarted/GetStartedSignInButton"
import GetStartedForm from "../components/PageGetStarted/GetStartedForm"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"

import PageSignIn from "../components/PageSignIn/PageSignIn"
import SignInBarLeft from "../components/PageSignIn/SignInBarLeft"
import SignInButton from "../components/PageSignIn/SignInButton"
import SignInContent from "../components/PageSignIn/SignInContent"
import SignInEmail from "../components/PageSignIn/SignInEmail"
import SignInTitle from "../components/PageSignIn/SignInTitle"
import SignInGetStarted from "../components/PageSignIn/SignInGetStarted"

import ForgotPasswordTitle from "../components/PageForgotPassword/ForgotPasswordTitle"
import ForgotPasswordEmail from "../components/PageForgotPassword/ForgotPasswordEmail"
import ForgotPasswordButton from "../components/PageForgotPassword/ForgotPasswordButton"
import ForgotPasswordContent from "../components/PageForgotPassword/ForgotPasswordContent"
import ForgotPasswordBackToSignIn from "../components/PageForgotPassword/ForgotPasswordBackToSignIn"
import PageForgotPassword from "../components/PageForgotPassword/PageForgotPassword"
import ForgotPasswordGetStarted from "../components/PageForgotPassword/ForgotPasswordGetStarted"

const props = {
  notif: {
    notifsCount: 6
  },
  profile: {
    lastname: "Duflot",
    firstname: "Romain",
    business: "Notoriety"
  }
}

const propsWith0notif = {
  notifsCount: 0
}

const propsWith6notif = {
  notifsCount: 6
}

const propsWith16notif = {
  notifsCount: 16
}

const propsWith116notif = {
  notifsCount: 116
}

const cardInHome = {
  id: 0,
  image: "",
  titre: "Documents requests",
  bio:
    "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
  buttonText: "Create first request",
  link: "lien0"
}

const listCardsInHome = [
  {
    id: 0,
    image: "",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Create first request",
    link: "lien0"
  },
  {
    id: 1,
    image: "",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Share documents",
    link: "lien1"
  },
  {
    id: 2,
    image: "",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Upload documents",
    link: "lien2"
  }
]

const name = "Kevin"

const dirs = [
  {
    _id: "dir_DOl2kN3n9lMeedN90kL9",
    object: "directory",
    name: "SammTrading",
    created: "2018-03-29T00:00:00+00:00",
    modified: "2018-03-29T00:00:00+00:00",
    shares: [],
    files: [],
    dirs: [
      {
        _id: "dir_EoeInRgUgzMPh0aLN2nz",
        object: "directory",
        name: "Webshop",
        created: "2018-03-29T11:36:42+00:00",
        modified: "2018-03-29T11:36:42+00:00",
        shares: []
      }
    ]
  }
]

const files = [
  {
    _id: "file_7F2jhzx5RlO8u5C1SP3c",
    object: "file",
    name: "TEST FOR POST",
    size: 0,
    ext: "",
    type: "",
    remove: 0,
    created: "2018-04-22T08:34:26+00:00",
    modified: "2018-04-22T08:34:26+00:00",
    removed: null,
    shares: [],
    dir: {
      _id: "dir_r4V13RVeHFFVvOLctpPe",
      object: "directory",
      name: "Sketchs & Photoshops",
      created: "2018-03-30T11:53:23+00:00",
      modified: "2018-03-30T12:11:15+00:00"
    }
  }
]

const listLinksProps = {
  dataLinks: [
    {
      nameLink: "Home",
      icon: process.env.PUBLIC_URL + "/img/icon_home.png"
    },
    {
      nameLink: "Files",
      icon: process.env.PUBLIC_URL + "/img/icon_files.png"
    },
    {
      nameLink: "Shares",
      icon: process.env.PUBLIC_URL + "/img/icon_shares.png"
    },
    {
      nameLink: "Templates",
      icon: process.env.PUBLIC_URL + "/img/icon_templates.png"
    },
    {
      nameLink: "Requests",
      icon: process.env.PUBLIC_URL + "/img/icon_requests.png"
    },
    {
      nameLink: "Public links",
      icon: process.env.PUBLIC_URL + "/img/icon_shares.png"
    },
    {
      nameLink: "Contacts",
      icon: process.env.PUBLIC_URL + "/img/icon_contacts.png"
    },
    {
      nameLink: "Settings",
      icon: process.env.PUBLIC_URL + "/img/icon_settings.png"
    }
  ]
}

const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}
storiesOf(" Main Components", module)
  .add("NavbarTop", () => <NavbarTop {...props} />)
  .add("NavbarLeft", () => <NavbarLeft {...listLinksProps} />)

storiesOf(" Dashboard Components", module)
  .add("NavbarTop", () => <NavbarTop {...props} />)
  .add("NavbarLeft", () => <NavbarLeft {...listLinksProps} />)
  .add("DashboardContent", () => (
    <Content elements={listCardsInHome} name={name} />
  ))

storiesOf("NavbarLeft", module)
  .add("NavbarListLink", () => <NavbarLeft {...listLinksProps} />)
  .add("NavbarLink", () => <Link {...homeLinkProps} />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif {...props.notif} />)
  .add("NavbarTopProfile", () => <NavbarTopProfile {...props.profile} />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif0", () => (
  <NavbarTopNotif {...propsWith0notif} />
))

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif116", () => (
  <NavbarTopNotif {...propsWith116notif} />
))

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 0 notif",
  () => <NavbarTopNotifBubble {...propsWith0notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 6 notifs",
  () => <NavbarTopNotifBubble {...propsWith6notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 16 notifs",
  () => <NavbarTopNotifBubble {...propsWith16notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 116 notifs",
  () => <NavbarTopNotifBubble {...propsWith116notif} />
)

storiesOf("SignIn", module)
  .add("SignInEmail", () => <SignInEmail />)
  .add("SignInButton", () => <SignInButton />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInTitle", () => <SignInTitle />)
storiesOf("DashboardContent", module)
  .add("card", () => <DashboardCard contenu={listCardsInHome[2]} />)
  .add("with array of actions", () => (
    <Content elements={listCardsInHome} name={name} />
  ))

storiesOf("Page Folders", module)
  .add("NavbarTop", () => <NavbarTop {...propsWith116notif} />)
  .add("NavbarLeft", () => <NavbarLeft {...listLinksProps} />)
  .add("FoldersBarTop", () => <FoldersBarTop />)

storiesOf("ListFile", module)
  .add("ListFile", () => <ListFile />)
  .add("ListFile with ContentFile in tbody", () => (
    <ListFile files={files} dirs={dirs} />
  ))
storiesOf("Sign In", module)
  .add("SignInTitle", () => <SignInTitle />)
  .add("SignInButton", () => <SignInButton />)
  .add("SignInEmail", () => <SignInEmail />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInContent", () => <SignInContent />)

storiesOf("SignInBarLeft", module).add("SignInBarLeft", () => <SignInBarLeft />)

storiesOf("Page SignIn", module).add("PageSignIn", () => <PageSignIn />)

storiesOf("GetStarted", module)
  .add("GetStartedSignInEmail", () => <GetStartedSignInEmail />)
  .add("GetStartedSignInTitle", () => <GetStartedSignInTitle />)
  .add("GetStartedSignInButton", () => <GetStartedSignInButton />)
  .add("GetStartedSignInLinkHaveAnAccount", () => (
    <GetStartedSignInLinkHaveAnAccount />
  ))

storiesOf("PageGetStartedForm", module).add("PageGetStartedForm", () => (
  <PageGetStartedForm />
))
storiesOf("Page GetStarted", module).add("PageGetStarted", () => (
  <PageGetStarted />
))

storiesOf("Components Forgot Password", module)
  .add("ForgotPasswordTitle", () => <ForgotPasswordTitle />)
  .add("ForgotPasswordEmail", () => <ForgotPasswordEmail />)
  .add("ForgotPasswordButton", () => <ForgotPasswordButton />)
  .add("ForgotPasswordGetStarted", () => <ForgotPasswordGetStarted />)
  .add("ForgotPasswordBackToSignIn", () => <ForgotPasswordBackToSignIn />)
  .add("ForgotPasswordContent", () => <ForgotPasswordContent />)

storiesOf("Page Forgot Password", module).add("PageForgotPassword", () => (
  <PageForgotPassword />
))
