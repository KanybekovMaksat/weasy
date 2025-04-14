export const pathKeys = {
  root: "/",
  home() {
    return pathKeys.root;
  },
  about() {
    return pathKeys.root.concat("about/");
  },
  terms() {
    return pathKeys.root.concat("terms-of-use/");
  },
  policy() {
    return pathKeys.root.concat("privacy-policy/");
  },
  settings() {
    return pathKeys.root.concat("settings/");
  },
  company() {
    return pathKeys.root.concat("company/");
  },
  login() {
    return pathKeys.root.concat("auth/");
  },
  registration() {
    return pathKeys.root.concat("registration/");
  },
  program() {
    return pathKeys.root.concat("course/");
  },
  ranking() {
    return pathKeys.root.concat("ranking/");
  },
  reviews() {
    return pathKeys.root.concat("reviews/");
  },
  subscriptions() {
    return pathKeys.root.concat("subscriptions/");
  },
  advantages() {
    return pathKeys.root.concat("advantages/");
  },
  industries: {
    root() {
      return pathKeys.root.concat("industries/");
    },
    bySlug(slug: string) {
      return pathKeys.industries.root().concat(`${slug}`);
    },
  },
  calendar() {
    return pathKeys.root.concat("calendar/");
  },
  specialists() {
    return pathKeys.root.concat("specialists/");
  },
  clients() {
    return pathKeys.root.concat("clients/");
  },
  profile() {
    return pathKeys.root.concat("profile/");
  },

  // group({ params }: { params: { slug: string } }) {
  //   return pathKeys.root.concat(`group/${params.slug}/`);
  // },
  course: {
    root() {
      return pathKeys.root.concat("courses/");
    },
    bySlug(slug: string) {
      return pathKeys.course.root().concat(`${slug}/`);
    },
  },
};
