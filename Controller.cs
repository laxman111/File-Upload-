
 public JsonResult AjaxCall(int cid)
        {
            try
            {
                if (cid != 0)
                {
                    var states = from s in db.states
                                 where s.countryId == cid
                                 select s;
                    return Json(new SelectList(states.ToArray(), "Id", "name"), JsonRequestBehavior.AllowGet);

                }
            }
            catch (Exception ex) { }
            return Json(null);
        }
