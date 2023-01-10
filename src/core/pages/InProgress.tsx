import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Result from "../components/Result";
import { ReactComponent as InProgressSvg } from "../assets/inProgress.svg";

const InProgress = () => {
  const { t } = useTranslation();

  return (
    <Result
      extra={
        <Button
          color="secondary"
          component={RouterLink}
          to={`/${process.env.PUBLIC_URL}/admin`}
          variant="contained"
        >
          {t("common.backHome")}
        </Button>
      }
      image={<InProgressSvg />}
      maxWidth="sm"
      subTitle={t("common.errors.inProgress.subTitle")}
      title={t("common.errors.inProgress.title")}
    />
  );
};

export default InProgress;
