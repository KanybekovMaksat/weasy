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
  login() {
    return pathKeys.root.concat("auth/");
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
  profile: {
    root() {
      return pathKeys.root.concat("profile/");
    },
    badges() {
      return pathKeys.profile.root().concat("badges/");
    },
  },
};
