export default async (context, locale) => {
  return await Promise.resolve({
    hello: "Hello",
    loading_page: "Loading page",
    internet_connection: "Make sure your internet connection is stable",
    not_found: "Page not found",
    error: "Error",
    back: "Back",
    say_hello: "say hello",
    thanks_visit: "Thank you for visiting",
    about_me: "about me",
    nur_khozin:
      "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Nodejs / PHP / Java / Kotlin and some other cool tools, libraries and frameworks."
  });
};
