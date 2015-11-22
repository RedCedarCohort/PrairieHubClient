using System.Web;
using System.Web.Optimization;

namespace prairiehub
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/js/libs/jquery-2.1.4.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/js/libs/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/css/bootstrap.min.css",
                      "~/css/bootstrap-theme.min.css",
                      "~/css/site.css"));

            //bundles.Add(new ScriptBundle("~/bundles/backbone").Include(
            //            "~/js/libs/underscore-min.js"
            //            , "~/js/libs/backbone-min.js"
            //            , "~/js/libs/backbone-marionette.min.js"
            //          ));

            //bundles.Add(new ScriptBundle("~/bundles/backboneapp").Include(
            //        "~/js/models/personModel.js",
            //        "~/js/collections/peopleCollection.js",
            //        "~/js/views/peopleView.js",
            //        "~/js/app.js"
            //));

            //bundles.Add(new ScriptBundle("~/bundles/require").Include(
            //        "~/js/require.js"
            //    ));
        }
    }
}
