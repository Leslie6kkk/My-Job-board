package leslie.project.jobrecord.service;

import java.nio.channels.FileChannel;
import java.util.*;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.apache.commons.lang3.time.DateUtils;

import leslie.project.jobrecord.entity.JobBean;
import leslie.project.jobrecord.repository.JobRepository;

@Service
public class JobService {
    // jobservice class's attribute (jobrepo type) and constructor
    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository){
        this.jobRepository = jobRepository;
    }

    public JobBean createNewJob(String position, String company, String level, Date applytime, String jobstate){
        JobBean newjob = new JobBean(position, company, level, applytime, jobstate);
        // add this job into mysql
        return jobRepository.save(newjob); //????? jobRepository.save()
    }

    public JobBean changeJobStatus(UUID id, String status){
        System.out.println("change service");
        System.out.println(id);
        System.out.println(status);
        JobBean currentjob = jobRepository.findById(id).orElse(null);
        if (currentjob != null){
            currentjob.setStatus(status);
            jobRepository.save(currentjob);
        }
        return currentjob;
    }

    public Optional<JobBean> getJobInfo(UUID id){
        return jobRepository.findById(id);
    }

    public List<JobBean> getApplied() {
        List<JobBean> jobList = jobRepository.findByJobstate("Applied");
        return jobList;
    }

    public List<JobBean> getInterviewing() {
        List<JobBean> jobList = jobRepository.findByJobstate("Interviewing");
        return jobList;
    }

    public List<JobBean> getArchived() {
        List<JobBean> jobList = jobRepository.findByJobstate("Refused");
        List<JobBean> jobList2 = jobRepository.findByJobstate("Offer");
        jobList.addAll(jobList2);
        return jobList;
    }

    public int calculatePercentage(int timeperiod){
        if (timeperiod == 1){
            // percentage for last week
        }
        return 1;
    }

    public Long countJobsWithApplytimeAndJobstate() {
        Calendar calendar = Calendar.getInstance();
        Date startOfMonth = DateUtils.truncate(calendar.getTime(), Calendar.MONTH);
        calendar.add(Calendar.MONTH, 1);
        Date startOfNextMonth = DateUtils.truncate(calendar.getTime(), Calendar.MONTH);

        return jobRepository.countJobsThisMonth(startOfMonth, startOfNextMonth,"applied");
    }
}
