from os.path import join, pardir

import web


class Index:
    render = web.template.render("../")

    def GET(self):
        return self.render.index()


class Media:
    # Serve media files from different folder than this script.
    def GET(self, c_type, name):
        if name.endswith("svg"):
            # Cross domain svg files are not allowed.
            return open(join(pardir, "resources", c_type, name.replace("svg", "png")), "rb").read()
        return open(join(pardir, "resources", c_type, name), "rb").read()

urls = (
    "/resources/(css|img|js)/(.*)", "Media",
    "/", "Index",
)
app = web.application(urls, globals())

if __name__ == "__main__":
    app.run()
