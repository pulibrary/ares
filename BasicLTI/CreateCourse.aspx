<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<AtlasSystems.Ares.WebService.CreateCourseModel>" MasterPageFile="~/Views/BasicLti/BasicLti.Master" %>

<asp:Content ID="mainContent" ContentPlaceHolderID="ContentPlaceHolderMain" runat="server">

    <h1>Create your course reserves list</h1>

    <p>Items needed for the course may be placed "on reserve," guaranteeing their availability for classroom use during the semester. You may add items to your course using this tool.</p>
    
    <p>If you would like further instructions on this process, please review <a href="https://library.princeton.edu/circulation/how-submit-course-reserves-request">How to Submit a Course Reserves Request</a>.</p>
    
    <form method="post" action="<#webserviceurl>/BasicLti/SubmitCourseForm"/>
    <#ltipostdata>

    <label for="semester" style="font-weight: bold;">Choose the semester to add items on reserve</label>
    <select name="semester" required>        
    <#semesteroptions>
    </select>

    <input type="hidden" name="selectionRequest" value="<#selectionrequest>" />

    <input type="submit" value="Create Course" />
    </form>
</asp:Content>
