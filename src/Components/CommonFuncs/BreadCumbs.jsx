import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";
export const breadcrumb = (pageName) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="javascript:void(0)">Opportunity Inputs</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="javascript:void(0)">{pageName}</BreadcrumbItem>
    </Breadcrumb>
  );
};
